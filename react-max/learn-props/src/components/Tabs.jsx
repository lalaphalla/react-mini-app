/**
 * buttons is a slot
 *
 * @export
 * @param {*} { children, buttons }
 */
export default function Tabs({ children, buttons, ButtonContainer }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
