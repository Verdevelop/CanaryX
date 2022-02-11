import { useSelector, useDispatch } from "react-redux";
import { getRebaseBlock, secondsUntilBlock, prettifySeconds } from "../../helpers";
import { Box, Typography } from "@material-ui/core";
import "./rebasetimer.scss";
import { Skeleton } from "@material-ui/lab";
import { useEffect, useMemo, useState } from "react";
import { loadAppDetails } from "../../slices/AppSlice";
import { useWeb3Context } from "../../hooks/web3Context";

function RebaseTimer() {
  const dispatch = useDispatch();
  const { provider, chainID } = useWeb3Context();

  const SECONDS_TO_REFRESH = 60;
  const [secondsToRebase, setSecondsToRebase] = useState(0);
  const [rebaseString, setRebaseString] = useState("");
  const [secondsToRefresh, setSecondsToRefresh] = useState(SECONDS_TO_REFRESH);

  const currentTime = useSelector(state => {
    return state.app.currentTime;
  });

  const endTime = useSelector(state => {
    return state.app.endTime;
  });

  const secondss = endTime - currentTime;
  function initializeTimer() {
    const seconds = secondsUntilBlock(currentTime, endTime);
    setSecondsToRebase(seconds);
    const prettified = prettifySeconds(seconds);
    setRebaseString(prettified !== "" ? prettified : "Less than a minute");
  }
  console.log("rebasetime", endTime, currentTime, secondss)

  // This initializes secondsToRebase as soon as currentTime becomes available
  useMemo(() => {
    if (currentTime) {
      initializeTimer();
    }
  }, [currentTime]);

  // After every period SECONDS_TO_REFRESH, decrement secondsToRebase by SECONDS_TO_REFRESH,
  // keeping the display up to date without requiring an on chain request to update currentTime.
  useEffect(() => {
    let interval = null;
    if (secondsToRefresh > 0) {
      interval = setInterval(() => {
        setSecondsToRefresh(secondsToRefresh => secondsToRefresh - 1);
      }, 1000);
    } else {
      // When the countdown goes negative, reload the app details and reinitialize the timer
      if (secondsToRebase < 0) {
        async function reload() {
          await dispatch(loadAppDetails({ networkID: chainID, provider: provider }));
        }
        reload();
        setRebaseString("");
      } else {
        clearInterval(interval);
        setSecondsToRebase(secondsToRebase => secondsToRebase - SECONDS_TO_REFRESH);
        setSecondsToRefresh(SECONDS_TO_REFRESH);
        const prettified = prettifySeconds(secondsToRebase);
        setRebaseString(prettified !== "" ? prettified : "Less than a minute");
      }
    }
    return () => clearInterval(interval);
  }, [secondsToRebase, secondsToRefresh]);

  return (
    <Box className="rebase-timer">
      <Typography variant="body2">
        {currentTime ? (
          secondsToRebase > 0 ? (
            <>
              <strong>{rebaseString}</strong> to next rebase
            </>
          ) : (
            <strong>rebasing</strong>
          )
        ) : (
          <Skeleton width="155px" />
        )}
      </Typography>
    </Box>
  );
}

export default RebaseTimer;
