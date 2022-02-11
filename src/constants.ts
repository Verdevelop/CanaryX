export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/wkich/hector-subgraph";
export const EPOCH_INTERVAL = 28800;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 1;

export const TOKEN_DECIMALS = 9;

export const DEFAULT_NETWORK = 19;

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  19: {
    CAND_ADDRESS: "0x70Ad7172EF0b131A1428D0c1F66457EB041f2176",
    // USDC_ADDRESS: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    MIM_ADDRESS: "0x82f0b8b456c1a451378467398982d4834b6829c1",
    // FRAX_ADDRESS: "0xdc301622e621166bd8e82f2ca0a26c13ad0be355",
    // WFTM_ADDRESS: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
    DAILP_ADDRESS: "0xb237907521e878eE8a624173f4d620FCB4d915E6",
    // USDCLP_ADDRESS: "0xd661952749f05acc40503404938a91af9ac1473b",
    // FRAXLP_ADDRESS: "0x0f8D6953F58C0dd38077495ACA64cbd1c76b7501",
    CNYA_ADDRESS: "0x612C0FAd248FF002E1cD0d5E09838b6F78CC15B8",
    SCNYA_ADDRESS: "0x43771Ecb143879FE6F54a57765590b61A3d75743",
    WSHEC_ADDRESS: "0x94CcF60f700146BeA8eF7832820800E2dFa92EdA",

    STAKING_ADDRESS: "0x6CB0464986A0A3810f3c748826CA1784ACa44779", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x2AfFc0F6cD5B5587B99bbBDf78cfEf59aFE87131", // Helper contract used for Staking only
    DISTRIBUTOR_ADDRESS: "0x41400d445359f5aD51650C76746C98D79174b2e3",
    OLD_STAKING_ADDRESS: "0x9ae7972BA46933B3B20aaE7Acbf6C311847aCA40",
    OLD_STAKING_HELPER_ADDRESS: "0x2ca8913173D36021dC56922b5db8C428C3fdb146",
    OLD_SHEC_ADDRESS: "0x36F26880C6406b967bDb9901CDe43ABC9D53f106",

    BONDINGCALC_ADDRESS: "0x9d2c5023a2fF68dC119320026ACCFd4dAA717A5d",
    gOHMBONDINGCALC_ADDRESS: "0xC13E8C5465998BDD1D91952243774d55B12dBEd0",
    BONDINGCALC_ADDRESS1: "0x783A734D5C65e44D3CC0C74e331C4d4F23407E64",
    TREASURY_ADDRESS: "0x55c8F57cFAc9C8ccBaB4E84DB8bE3e44Aa898A43",
    REDEEM_HELPER_ADDRESS: "0x8CB26123DC8b5d2fF0C90373f2296097cA61b124",
  },
};

export const messages = {
  please_connect: "Please connect your wallet to the Songbird network to use Wonderland.",
  please_connect_wallet: "Please connect your wallet.",
  try_mint_more: (value: string) => `You're trying to mint more than the maximum payout available! The maximum mint payout is ${value} CNYA.`,
  before_minting: "Before minting, enter a value.",
  existing_mint:
      "You have an existing mint. Minting will reset your vesting period and forfeit any pending claimable rewards. We recommend claiming rewards first or using a fresh wallet. Do you still wish to proceed?",
  before_stake: "Before staking, enter a value.",
  before_unstake: "Before un staking, enter a value.",
  tx_successfully_send: "Your transaction was successful",
  your_balance_updated: "Your balance was successfully updated",
  nothing_to_claim: "You have nothing to claim",
  something_wrong: "Something went wrong",
  switch_to_fantom: "Switch to the Songbird network?",
  slippage_too_small: "Slippage too small",
  slippage_too_big: "Slippage too big",
  your_balance_update_soon: "Your balance will update soon",
};
