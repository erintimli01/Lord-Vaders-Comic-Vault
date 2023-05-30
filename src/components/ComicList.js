import React from 'react';
import Comic from './Comic';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

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
