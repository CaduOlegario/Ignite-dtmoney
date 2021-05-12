import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--white);
    background-color: var(--blue-light);
    border: 1.5px solid var(--blue-light);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
      border: 1.5px solid var(--blue);
    }
  }
`