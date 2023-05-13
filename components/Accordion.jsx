"use client";

import { Disclosure } from "@headlessui/react";

export default function Accordion() {
  return (
    <div className="accordion">
      <Disclosure>
        {({ open }) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <Disclosure.Button
                className={`accordion-button ${open ? "" : "collapsed"}`}
              >
                First item
              </Disclosure.Button>
            </h2>
            <Disclosure.Panel className="accordion-collapse">
              <div className="accordion-body">
                This is the content of the first item.
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <Disclosure.Button
                className={`accordion-button ${open ? "" : "collapsed"}`}
              >
                Second item
              </Disclosure.Button>
            </h2>
            <Disclosure.Panel className="accordion-collapse">
              <div className="accordion-body">
                This is the content of the second item.
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
