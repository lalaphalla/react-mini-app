import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./Coreconcept"


export default function CoreConcepts (){

  // const core = [
  //   {
  //     title: "Component",
  //     description: "The core UI building block",
  //     image: componentsImg,
  //   },
  // ];
  // const component = core[0];
    return(
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((core,index)=>(
              <li key={index}>
                <CoreConcept {...core}/>
              </li>
            ))}
            {/* <li>
              <CoreConcept {...CORE_CONCEPTS[0]} />
            </li>
            <li>
              <CoreConcept {...CORE_CONCEPTS[1]} />
            </li>
            <li>
              <CoreConcept {...CORE_CONCEPTS[2]} />
            </li>
            <li>
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </li> */}
          </ul>
        </section>
    )
}