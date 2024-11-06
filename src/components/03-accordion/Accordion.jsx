import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FaqData from './FaqData.json'

const Accordion = () => {
const [openQId, setopenQId] = useState(null)

const handleClick = (id) => {
  setopenQId(openQId === id ? null : id)
}

  return (
    <div className="mt-10 mx-auto">
      <h3 className="text-2xl font-medium text-center">Accordion</h3>

      <div className="accordian_wrapper max-w-5xl mx-auto mt-10">

        {FaqData?.map((question) => (
          <div className="accord wrap border rounded px-3 py-2 mb-4" key={question.id}>
          <a
            className="q_box flex justify-between items-center "
            href="#"
            onClick={() => handleClick(question.id)}
          >
            <span className="font-medium">{question.title}</span>
            <FontAwesomeIcon icon={openQId === question.id ? faMinus : faPlus} />
          </a>
          {openQId === question.id && <p className="a_box mt-4">{question.info}</p>}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
