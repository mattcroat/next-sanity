import styled from '@emotion/styled'

export function Preview({ preview }) {
  return (
    <>
      {preview ? (
        <Message>
          <a href="/api/exit-preview">Exit preview mode</a>
        </Message>
      ) : null}
    </>
  )
}

const Message = styled.div`
  padding: 1rem;
  font-weight: 700;
  background-color: seagreen;
`
