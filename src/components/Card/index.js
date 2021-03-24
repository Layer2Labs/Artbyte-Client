import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SCHandlers from 'utils/sc.interaction';
import ERC721Module from 'utils/erc721';
import IPFSHandler from 'utils/ipfs';
import { FantomNFTConstants } from '../../constants/smartcontracts/fnft.constants';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    backgroundSize: 'contain',
  },
});

const BaseCard = ({ style }) => {
  const classes = useStyles();

  const handleDetails = async () => {
    let fnft_sc = await SCHandlers.loadContract(
      FantomNFTConstants.TESTNETADDRESS,
      FantomNFTConstants.ABI
    );
    fnft_sc = fnft_sc[0];
    console.log(fnft_sc);
    let uri = await ERC721Module.getTokenURI(33, fnft_sc);
    let content = await IPFSHandler.readMetadataFromIPFS(uri);
    console.log(content);
  };

  return (
    <Box style={style} className={classes.root}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://gateway.pinata.cloud/ipfs/QmfKZXhGzPVYLu7YN5GrZnNitpgL8p3ADojuy1rPpLc5TX"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cute
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This is a cute girl based NFT
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleDetails}>
            Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default React.memo(BaseCard);