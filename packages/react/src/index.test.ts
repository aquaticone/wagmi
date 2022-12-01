import { expect, it } from 'vitest'

import * as Exports from './'

it('should expose correct exports', () => {
  expect(Object.keys(Exports)).toMatchInlineSnapshot(`
    [
      "createClient",
      "Context",
      "WagmiConfig",
      "useClient",
      "paginatedIndexesConfig",
      "useAccount",
      "useBalance",
      "useBlockNumber",
      "useConnect",
      "useContract",
      "useContractEvent",
      "useContractInfiniteReads",
      "useContractRead",
      "useContractReads",
      "useContractWrite",
      "useDisconnect",
      "useEnsAddress",
      "useEnsAvatar",
      "useEnsName",
      "useEnsResolver",
      "useFeeData",
      "useInfiniteQuery",
      "useMutation",
      "useNetwork",
      "useProvider",
      "useQuery",
      "useQueryClient",
      "useSendTransaction",
      "usePrepareContractWrite",
      "usePrepareSendTransaction",
      "useSignMessage",
      "useSignTypedData",
      "useSigner",
      "useSwitchNetwork",
      "useToken",
      "useTransaction",
      "useWaitForTransaction",
      "useWebSocketProvider",
      "AddChainError",
      "ChainDoesNotSupportMulticallError",
      "ChainMismatchError",
      "ChainNotConfiguredError",
      "Connector",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ContractMethodDoesNotExistError",
      "ContractMethodNoResultError",
      "ContractMethodRevertedError",
      "ContractResultDecodeError",
      "ProviderChainsNotFound",
      "ProviderRpcError",
      "ResourceUnavailableError",
      "RpcError",
      "SwitchChainError",
      "SwitchChainNotSupportedError",
      "UserRejectedRequestError",
      "configureChains",
      "createStorage",
      "deepEqual",
      "deserialize",
      "erc20ABI",
      "erc721ABI",
      "erc4626ABI",
      "readContracts",
      "serialize",
    ]
  `)
})
