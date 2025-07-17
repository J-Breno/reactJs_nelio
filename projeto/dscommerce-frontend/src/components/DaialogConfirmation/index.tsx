import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
  message: string;
  id: number;
  onDaialogAnswer: Function;
};

export function DaialogConfirmation({ message, id, onDaialogAnswer }: Props) {
  return (
    <>
      <div
        className="dsc-daialog-background"
        onClick={() => onDaialogAnswer(false, id)}
      >
        <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
          <h2>{message}</h2>
          <div className="dsc-daialog-btn-container">
            <div onClick={() => onDaialogAnswer(false, id)}>
              <ButtonInverse text="Não" />
            </div>
            <div onClick={() => onDaialogAnswer(true, id)}>
              <ButtonPrimary text="Sim" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
