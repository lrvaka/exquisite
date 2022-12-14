import { useState } from "react";
import ServiceInfo from "./ServiceInfo";
import ProjectTypeInfo from "./ProjectTypeInfo";
import BudgetInfo from "./BudgetInfo";
import PaidAdCheck from "./PaidAdCheck";
import TellUsMoreInfo from "./TellUsMoreInfo";
import FinalInfo from "./FinalInfo";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Form({ from }) {
  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    service: "",
    projectType: "",
    tellUsMore: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    from: from,
  });

  const componentList = [
    <ServiceInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <ProjectTypeInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <TellUsMoreInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <FinalInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
  ];

  return (
    <div className="relative ">
      <div className="relative mx-auto text-white">
        <div className="bg-slate-100 rounded-tr-xl rounded-tl-xl h-10 overflow-hidden">
          <div
            className="bg-teal-600 animate-colorBg w-full h-full transition-all duration-1000 ease-in-expo"
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
        <div className="mx-auto lg:max-w-none bg-theme-500 p-5 lg:p-10 rounded-br-xl rounded-bl-xl  min-h-[620px] overflow-hidden relative w-full">
          <TransitionGroup component={null}>
            <CSSTransition
              classNames="slide"
              timeout={{ enter: 1000, exit: 250 }}
              key={page}
            >
              {componentList[page]}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}
