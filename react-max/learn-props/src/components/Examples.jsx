import { useState } from "react";
import TabButton from "../components/TabButton";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";
import Section from "./Section";

export default function Example() {
  const tabs = ["components", "jsx", "props", "state"];
  const [selectedTopic, setSelectedTopic] = useState("");
  let tabContent = <p>Pleace select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleClick(tab) {
    setSelectedTopic(tab);
  }

  return (
    <Section title="Example" id="examples">
      <Tabs
        ButtonContainer="menu"
        buttons={
          <>
            {tabs.map((tab, index) => (
              <TabButton
                key={index}
                isSelected={tab === selectedTopic}
                onSelect={() => handleClick(tab)}
              >
                {tab}
              </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
