import React from 'react';
import Comic from './Comic';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

function ComicList({ comics }) {
  if (!comics) {
    return null;
  }

  return (
    <Grid columns={3}>
      <Grid.Row>
        {comics.map((comic) => (
          <Grid.Column key={comic.id}>
            <Comic
              id={comic.id}
              title={comic.title}
              condition={comic.condition}
              date={comic.date}
              price={comic.price}
              image={comic.image}
            />
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
      condition: PropTypes.string,
      date: PropTypes.string,
      price: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default ComicList;