import { useContext } from "react";
import { Container } from "./style";
import { TransactionsContext } from './../../TransactionsContext';



export function TransactionsTable() {

  
  const {transactions} = useContext(TransactionsContext)
  console.log(transactions)

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