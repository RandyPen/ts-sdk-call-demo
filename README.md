# TS-SDK-Call-demo

A reference demo created during I serve as a technical mentor at the hackathon.     
Since Sui automatically merge Coin\<SUI\> during transactions, and there is no additional Coin\<SUI\> available to pay for gas for future calls, it is more convenient to use the TypeScript SDK for debugging contracts.

Install [deno](https://docs.deno.com/runtime/manual/getting_started/installation) and run

```
deno run call.ts
```

For more details, you can look at the source code of [client.ts](https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/client/client.ts) and [TransactionBlock.ts](https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/transactions/TransactionBlock.ts).


因为Sui在交易的时候会自动合并Coin\<SUI\>, 使用Explorer去调用会变得很不方便。  
在给黑客松技术支持期间，提供了这个使用TypeScript SDK去调用Sui Move智能合约的最小demo. 方便不熟悉TypeScript SDK的团队去调试项目。

安装[deno](https://docs.deno.com/runtime/manual/getting_started/installation) 然后执行

```
deno run call.ts
```

如果想对底层实现有更多了解，也推荐去阅读 [client.ts](https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/client/client.ts) 和 [TransactionBlock.ts](https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/transactions/TransactionBlock.ts) 的源代码。
