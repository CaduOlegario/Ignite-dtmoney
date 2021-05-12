import { useEffect } from "react";
import { Container } from "./style";
import { api } from './../../services/api';

export function TransactionsTable() {
  // const [transactions, setTransactions] = useState([])
  useEffect(() => {
    api.get("transactions").then(data => console.log(data.data))
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
            <tr>
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
            </tr>

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