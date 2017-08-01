import gql from 'graphql-tag';

export default gql`
  query($id: Int!) {
    readAdventurePages(ID: $id) {
      edges {
        node {
          ID,
          Content,
          Choices {
            edges {
              node {
                ID,
                Content,
                GoTo {
                  ID
                }
              }
            }
          }
        }
      }
    }
  }
`;
