import Me from "../../images/Me.jpg";
import { transactions } from "../../utils/transactions";

const Transactions = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1>Recent Transactions</h1>
      <ul className="flex flex-col gap-2">
        {transactions.map((tx, idx) => (
          <li
            key={tx.number + idx}
            className="flex justify-between p-2 items-center border-b"
          >
            <div>
              <img src={Me} className="h-20 w-20 rounded-xl" />
              <div className="flex flex-col">
                <h1 className="font-bold text-sm">{tx.name}</h1>
                <h1 className="text-sm">#{tx.number}</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <h1>{tx.action} </h1>
              <div className="flex gap-2">
                <h1>{tx.price}</h1>
                <p>{tx.ticker}</p>
              </div>
              <p className="text-sm text-gray-400">{tx.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
