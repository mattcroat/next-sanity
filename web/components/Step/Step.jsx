import styled from '@emotion/styled'

export function Step({ stepNumber, description }) {
  return (
    <Container>
      <Number>
        <Value>{stepNumber}</Value>
      </Number>
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;
`

const Number = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 700;
`

const Value = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: gold;
  border-radius: 50%;
`

const Description = styled.div`
  /* semantic */
`
