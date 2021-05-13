import { useEffect, useState } from "react";
import { Container } from "./style";
import { api } from './../../services/api';

interface Transactions {
  amount: number;
  category: string;
  createdAt: string;
  title: string;
  type: string;
  id: number;
}

export function TransactionsTable() {

  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(() => {
    api.get("transactions").then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Datas</th>
          </tr>
        </thead>
        <tbody>

            {
              transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {/* {transaction.createdAt} */}
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(transaction.createdAt)
                    )}
                    </td>
                </tr>
              ))
            }
            {/* <tr>
              <td>Desenvolvimento de WebSite</td>
              <td className="deposit">R$12.000,00</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr>

            <tr>
              <td>Aluguel</td>
              <td className="withdraw">R$-1100,00</td>
              <td>Aluguel</td>
              <td>25/02/2021</td>
            </tr> */}

            {/* <tr>
              <td>Desenvolvimento de WebSite</td>
              <td>R$12.000,00</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr> */}
          </tbody>
      </table>
    </Container>
  )
}