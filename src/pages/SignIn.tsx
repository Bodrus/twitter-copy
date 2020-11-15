import React, { ReactNode } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    // height: '100vh'
    height: 'calc(100vh - 84px)'
  },
  blueSide: {
    display: 'flex',
    backgroundColor: '#1DA1F2',
    flex: '0 0 50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blueSideList: {
    listStyle: 'none',
    marginBottom: 30
  },
  blueSideIcon: {
    fontSize: 30,
    color: '#fff',
    marginRight: 15
  },
  listContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  listTittle: {
    fontSize: 20,
    fontWeight: 600,
    color: '#fff'
  },
  loginSideWrapper: {
    width: 380
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%'
  },
  loginSideTittle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20
  },
  loginSideText: {
    fontWeight: 700,
    marginBottom: 10
  },
  loginSideTwitterIcon: {
    fontSize: 45
  }
}));

export const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon className={classes.loginSideTwitterIcon} color={"primary"}/>
        <ul>
          <li className={classes.blueSideList}>
            <div className={classes.listContentWrapper}>
              <SearchIcon className={classes.blueSideIcon} />
              <Typography
                className={classes.listTittle}
              >
                Follow your interests.
              </Typography>
            </div>
          </li>
          <li className={classes.blueSideList}>
            <div className={classes.listContentWrapper}>
              <PeopleIcon className={classes.blueSideIcon} />
              <Typography
                className={classes.listTittle}
              >
                Hear what people are talking about.
              </Typography>
            </div>
          </li>
          <li className={classes.blueSideList}>
            <div className={classes.listContentWrapper}>
              <ChatIcon className={classes.blueSideIcon} />
              <Typography
                className={classes.listTittle}
              >
                Join the conversation.
              </Typography>
            </div>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon className={classes.loginSideTwitterIcon} color={"primary"}/>
          <Typography
            variant="h4"
            className={classes.loginSideTittle}
          >
            See what’s happening in the world right now
          </Typography>
          <Typography className={classes.loginSideText}>
            Join Twitter today.
          </Typography>
          <Button
            style={{ marginBottom: 15 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign up
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Log in
          </Button>
        </div>
      </section>
    </div>
  );
}
