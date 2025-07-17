import ButtonPrimary from "../ButtonPrimary";

type Props = {
  message: string;
  onDaialogClose: Function;
};

export function DaialogInfo({ message, onDaialogClose }: Props) {
  return (
    <>
      <div className="dsc-daialog-background" onClick={() => onDaialogClose()}>
        <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
          <h2>{message}</h2>
          <div className="dsc-daialog-btn-container" onClick={() => onDaialogClose()}>
            <ButtonPrimary text="Ok" />
          </div>
        </div>
      </div>
    </>
  );
}
