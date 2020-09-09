import React from "react";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <img
            className="footer__albumCover"
            src="https://upload.wikimedia.org/wikipedia/en/e/ed/Major_Lazer_and_DJ_Snake_-_Lean_On_%28feat._M%C3%98%29.png"
            alt="Album Cover"
          />
          <div className="footer__songInfo">
            <h4>Lean On</h4>
            <p>Major Lazer</p>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Footer;
