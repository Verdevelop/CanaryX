import { useState, useEffect } from "react";
import { addresses, TOKEN_DECIMALS } from "../../constants";
import { Link, SvgIcon, Popper, Button, Paper, Typography, Divider, Box, Fade, Slide } from "@material-ui/core";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-fill.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as scnyaTokenImg } from "../../assets/tokens/SCNYA.svg";
import { ReactComponent as cnyaTokenImg } from "../../assets/tokens/CNYA.svg";
import { ReactComponent as wshecTokenImg } from "../../assets/tokens/wsHEC.svg";
import { NavLink } from "react-router-dom";

import "./hecmenu.scss";
import { cand } from "src/helpers/AllBonds";
import { useWeb3Context } from "../../hooks/web3Context";

import CNYAImg from "src/assets/tokens/CNYA.png";
import SCNYAImg from "src/assets/tokens/SCNYA.png";
import wsHecImg from "src/assets/tokens/wsHEC.svg";

const addTokenToWallet = (tokenSymbol, tokenAddress) => async () => {
  if (window.ethereum) {
    const host = window.location.origin;
    // NOTE (appleseed): 33T token defaults to sHEC logo since we don't have a 33T logo yet
    let tokenPath, decimals;
    // if (tokenSymbol === "HEC") {

    // } ? HecImg : SHecImg;
    switch (tokenSymbol) {
      // case "wsHEC":
      //   tokenPath = wsHecImg;
      //   decimals = 18;
      //   break;
      case "CNYA":
        tokenPath = CNYAImg;
        decimals = 9;
        break;
      default:
        tokenPath = SCNYAImg;
        decimals = 9;
    }
    const imageURL = `${host}/${tokenPath}`;
    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: decimals,
            image: imageURL,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

function HecMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isEthereumAPIAvailable = window.ethereum;
  const { chainID } = useWeb3Context();

  const networkID = chainID;

  const SCNYA_ADDRESS = addresses[networkID].SCNYA_ADDRESS;
  const WSHEC_ADDRESS = addresses[networkID].WSHEC_ADDRESS;
  const CNYA_ADDRESS = addresses[networkID].CNYA_ADDRESS;
  const USDC_ADDRESS = addresses[networkID].USDC_ADDRESS;

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = "hec-popper";
  const candAddress = cand.getAddressForReserve(networkID);
  return (
    <Box
      component="div"
      onMouseEnter={e => handleClick(e)}
      onMouseLeave={e => handleClick(e)}
      id="hec-menu-button-hover"
    >
      <Button id="hec-menu-button" size="large" variant="contained" color="secondary" title="CNYA" aria-describedby={id}>
        <SvgIcon component={InfoIcon} color="primary" />
        <Typography>CNYA</Typography>
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start" transition>
        {({ TransitionProps }) => {
          return (
            <Fade {...TransitionProps} timeout={100}>
              <Paper className="hec-menu" elevation={1}>
                <Box component="div" className="buy-tokens">
                  <Link
                    href={`https://xfx.flr.finance/swap?inputCurrency=${candAddress}&outputCurrency=${CNYA_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="large" variant="contained" color="secondary" fullWidth>
                      <Typography align="left">
                        Buy on FlareXSwap <SvgIcon component={ArrowUpIcon} htmlColor="#A3A3A3" />
                      </Typography>
                    </Button>
                  </Link>

                  {/* <Link
                    href={`https://swap.spiritswap.finance/#/add/${USDC_ADDRESS}/${CNYA_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="large" variant="contained" color="secondary" fullWidth>
                      <Typography align="left">
                        Buy on SpiritSwap <SvgIcon component={ArrowUpIcon} htmlColor="#A3A3A3" />
                      </Typography>
                    </Button>
                  </Link>

                  <Link component={NavLink} to="/wrap" style={{ textDecoration: "none" }}>
                    <Button size="large" variant="contained" color="secondary" fullWidth>
                      <Typography align="left">Wrap sHEC</Typography>
                    </Button>
                  </Link> */}
                </Box>

                {isEthereumAPIAvailable ? (
                  <Box className="add-tokens">
                    <Divider color="secondary" />
                    <p>ADD TOKEN TO WALLET</p>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                      <Button variant="contained" color="secondary" onClick={addTokenToWallet("CNYA", CNYA_ADDRESS)}>
                        <SvgIcon
                          component={cnyaTokenImg}
                          viewBox="0 0 32 32"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">CNYA</Typography>
                      </Button>
                      <Button variant="contained" color="secondary" onClick={addTokenToWallet("sCNYA", SCNYA_ADDRESS)}>
                        <SvgIcon
                          component={scnyaTokenImg}
                          viewBox="0 0 32 32"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">sCNYA</Typography>
                      </Button>
                      {/* <Button variant="contained" color="secondary" onClick={addTokenToWallet("wsHEC", WSHEC_ADDRESS)}>
                        <SvgIcon
                          component={wshecTokenImg}
                          viewBox="0 0 32 32"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">wsHEC</Typography>
                      </Button> */}
                    </Box>
                  </Box>
                ) : null}
              </Paper>
            </Fade>
          );
        }}
      </Popper>
    </Box>
  );
}

export default HecMenu;
