import { ReactComponent as ForumIcon } from "../../assets/icons/forum.svg";
import { ReactComponent as GovIcon } from "../../assets/icons/governance.svg";
import { ReactComponent as DocsIcon } from "../../assets/icons/docs.svg";
import { ReactComponent as XfxSwapIcon } from "../../assets/icons/xfxswap.svg";
import { ReactComponent as SpiritSwapIcon } from "../../assets/icons/spiritswap.svg";
import { ReactComponent as FeedbackIcon } from "../../assets/icons/feedback.svg";
import { SvgIcon } from "@material-ui/core";
import { AccountBalanceOutlined, MonetizationOnOutlined } from "@material-ui/icons";

const externalUrls = [
  {
    title: "Buy on FlareXSwap",
    url: "https://xfx.flr.finance/swap?inputCurrency=0x612C0FAd248FF002E1cD0d5E09838b6F78CC15B8&outputCurrency=0x70Ad7172EF0b131A1428D0c1F66457EB041f2176",
    icon: <SvgIcon viewBox="0 0 64 64" color="primary" component={XfxSwapIcon} />,
  },
  // {
  //   title: "Buy on SpiritSwap",
  //   url: "https://swap.spiritswap.finance/#/exchange/swap/0x5c4fdfc5233f935f20d2adba572f770c2e377ab0",
  //   icon: <SvgIcon viewBox="0 0 155 172" color="primary" component={SpiritSwapIcon} />,
  // },
  // {
  //   title: "Hector Bank",
  //   label: "(Coming soon)",
  //   icon: <MonetizationOnOutlined viewBox="0 0 20 24" />,
  // },
  // {
  //   title: "Hector PRO",
  //   label: "(Coming soon)",
  //   icon: <AccountBalanceOutlined viewBox="0 0 20 24" />,
  // },
  {
    title: "Forum",
    url: "https://www.canaryx.xyz/forum",
    icon: <SvgIcon color="primary" component={ForumIcon} />,
  },
  {
    title: "Governance",
    url: "https://www.canaryx.xyz/governance",
    icon: <SvgIcon color="primary" component={GovIcon} />,
  },
  {
    title: "Docs",
    url: "https://www.canaryx.xyz/dao-documentation",
    icon: <SvgIcon color="primary" component={DocsIcon} />,
  },
];

export default externalUrls;
