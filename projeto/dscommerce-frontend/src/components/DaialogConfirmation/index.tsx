import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
  message: string;
  onDaialogAnswer: Function;
};

export function DaialogConfirmation({ message, onDaialogAnswer }: Props) {
  return (
    <>
      <div
        className="dsc-daialog-background"
        onClick={() => onDaialogAnswer(false)}
      >
        <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
          <h2>{message}</h2>
          <div className="dsc-daialog-btn-container">
            <div onClick={() => onDaialogAnswer(false)}>
              <ButtonInverse text="Não" />
            </div>
            <div onClick={() => onDaialogAnswer(true)}>
              <ButtonPrimary text="Sim" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
