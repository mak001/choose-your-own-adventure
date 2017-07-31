import gql from 'graphql-tag';

export default gql`
  query {
    readAdventurePages(ID: 1) {
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
