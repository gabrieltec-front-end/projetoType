import styled from 'styled-components'
import Rem from '@/utils/pxToRem'
import { Theme } from 'styled-components'
import { TableComp } from '@/types'

const StyledTable = styled.div<{ theme?: Theme }>`
  overflow-x: auto;
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      height: ${Rem(48)};
      padding: 0 ${Rem(8)} 0 0;
      text-align: left;
      &:last-child {
        text-align: right;
        pading: 0;
      }
    }

    th {
      font-weight: 600;
      color: ${(props) => props.theme.typographies.subtitle};
    }

    td {
      border-bottom: ${Rem(1)} solid ${(props) => props.theme.appDefaultStroke};

      &:last-child {
        border-bottom: none;
      }
    }
  }
`

function TableComponente(props: TableComp) {
  const { headers, rows } = props
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {headers.map((headers, index) => (
              <th key={index}>{headers}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rows, rowsIndex) => (
            <tr key={rowsIndex}>
              {rows.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  )
}

export default TableComponente
