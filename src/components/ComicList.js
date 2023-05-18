import React from 'react';
import Comic from './Comic';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
// import "./ComicList.css";

// const StyledComicList = styled.div`
//   font-family: 'Bangers', cursive;
// `

//.comicStyle ... className="comicStyle" transform consts into classes

const comicStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%", 
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  marginBottom: "20px", 
  height: "100%",
  backgroundColor: "white",
 };

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

function ComicList({ comics }) {
  if (!comics) {
    return null;
  }

  return (
    <Grid columns={3} doubling>
      <Grid.Row style={rowStyle}> 
        {comics.map((comic) => (
          <Grid.Column key={comic.id} mobile={16} tablet={8} computer={5}>
            <div style={columnStyle}> 
              <div style={comicStyle}>
                <Comic
                  id={comic.id}
                  title={comic.title}
                  description={comic.description}
                  condition={comic.condition}
                  date={comic.date}
                  price={comic.price}
                  image={comic.image}
                />
              </div>
            </div>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>

  );
}

ComicList.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      condition: PropTypes.string,
      date: PropTypes.string,
      price: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default ComicList;

// import React from 'react';
// import Comic from './Comic';
// import PropTypes from 'prop-types';
// import { Grid } from 'semantic-ui-react';
// import styled from 'styled-components';

// const ComicListContainer = styled.div`
//   font-family: 'Bangers', cursive;
// `;

// const ComicContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 80%;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   margin-bottom: 20px;
//   height: 100%;
//   background-color: white;
//   font-family: 'Bangers', cursive;
// `;

// const RowContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const ColumnContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

// function ComicList({ comics }) {
//   if (!comics) {
//     return null;
//   }

//   return (
//     <ComicListContainer>
//       <Grid columns={3} doubling>
//         <RowContainer>
//         <Grid.Row as={RowContainer}>
//           {comics.map((comic) => (
//             <Grid.Column key={comic.id} mobile={16} tablet={8} computer={5}>
//               <Column>
//                 <ComicContainer>
//                   <Comic
//                     id={comic.id}
//                     title={comic.title}
//                     description={comic.description}
//                     condition={comic.condition}
//                     date={comic.date}
//                     price={comic.price}
//                     image={comic.image}
//                   />
//                 </ComicContainer>
//               </Column>
//             </Grid.Column>
//           ))}
//         </Grid.Row>
//         </RowContainer>
//       </Grid>
//     </ComicListContainer>
//   );
// }

// ComicList.propTypes = {
//   comics: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       title: PropTypes.string,
//       description: PropTypes.string,
//       condition: PropTypes.string,
//       date: PropTypes.string,
//       price: PropTypes.string,
//       image: PropTypes.string,
//     })
//   ),
// };

// export default ComicList;

{/* return (
    <ComicListContainer>
      <Grid columns={3} doubling>
        <Grid.Row as={RowContainer}>
          {comics.map((comic) => (
            <Grid.Column key={comic.id} mobile={16} tablet={8} computer={5}>
              <ColumnContainer>
                <ComicContainer>
                  <Comic
                    id={comic.id}
                    title={comic.title}
                    description={comic.description}
                    condition={comic.condition}
                    date={comic.date}
                    price={comic.price}
                    image={comic.image}
                  />
                </ComicContainer>
              </ColumnContainer>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </ComicListContainer>
  );
} */}