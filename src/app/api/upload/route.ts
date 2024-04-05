import { NextResponse, NextRequest } from 'next/server';
import Irys from '@irys/sdk';

const MIN_FUNDS = 0.05;

export async function POST(req: NextRequest) {
  const url = 'https://devnet.irys.xyz';
  const token = 'matic';
  const providerUrl = 'https://rpc-mumbai.maticvigil.com';

  const data = await req.json();
  console.log(data);

  const irys = new Irys({
    url,
    token,
    key: process.env.PRIVATE_KEY,
    config: { providerUrl },
  });

  let balance = await irys.getLoadedBalance();
  let readableBalance = irys.utils.fromAtomic(balance).toNumber();

  if (readableBalance < MIN_FUNDS) {
    try {
      const fundTx = await irys.fund(irys.utils.toAtomic(0.05));
      console.log(
        `Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${
          irys.token
        }`
      );
    } catch (e) {
      console.log('Error funding', e);
    }
  }

  const tx = await irys.upload(
    JSON.stringify({
      title: data.title,
      description: data.description,
      strategy: data.strategy,
      country: data.country,
      address: data.address,
      funds: data.funds,
    }),
    {
      tags: [{ name: 'Content-Type', value: 'application/json' }],
    }
  );
  console.log(`https://arweave.net/${tx.id}`);
  return NextResponse.json({
    txId: `${tx.id}`,
    title: `${data.title}`,
    description: `${data.description}`,
    strategy: `${data.strategy}`,
    country: `${data.country}`,
    address: `${data.address}`,
    funds: `${data.funds}`,
  });
}
