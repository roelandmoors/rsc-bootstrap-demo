"use client";

import { Disclosure } from "@headlessui/react";

export default function Accordion() {
  return (
    <div className="accordion">
      <Disclosure>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <Disclosure.Button className="accordion-button">
              Is team pricing available?
            </Disclosure.Button>
          </h2>
          <Disclosure.Panel className="accordion-collapse">
            <div className="accordion-body">
              Yes! You can purchase a license that you can share with your
              entire team.
            </div>
          </Disclosure.Panel>
        </div>
      </Disclosure>
    </div>
  );
}
