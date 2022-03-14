import type { FC } from "react";

type Props = {
  label: string;
  value?: string;
};

const FooterItem: FC<Props> = ({ label, value }) => {
  return (
    <div className="item">
      <span className="label">{label}</span>
      <span className="value">{value || "-"}</span>
    </div>
  );
};

FooterItem.defaultProps = {
  value: "",
};

export default FooterItem;
