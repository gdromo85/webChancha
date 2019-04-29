import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import './style.css';

function Page(props) {
    const {
        goTo,
        currentItem,
    } = props;

    return (
        <Fragment>
            <CssBaseline />

            <div className="details-page">
                <Paper
                    elevation={1}
                    className="paper-container"
                >
                    {currentItem ?
                        <Fragment>
                            <Typography gutterBottom variant="h3" component="h2">
                                {currentItem.title}
                            </Typography>

                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${currentItem.image})`,
                                }}
                            />
                            <Typography gutterBottom variant="h6" component="h4">
                                <br/>
                                Direccion:  {currentItem.content}
                            </Typography>
                            <Typography gutterBottom component="p" className="content">
                               {currentItem.descripcion}
                            </Typography>
                            <Typography gutterBottom component="p" className="content">
                               Horarios:
                                 Lunes: {currentItem.lunes} <br/>
                                 Martes: {currentItem.martes} <br/>
                                 Miercoles: {currentItem.miercoles} <br/>
                                 Jueves: {currentItem.jueves} <br/>
                                 Viernes: {currentItem.viernes} <br/>
                                 Sabado: {currentItem.sabado} <br/>
                                 Domingo: {currentItem.domingo}
                            </Typography>

                            
                           
                        </Fragment>
                        :
                        <CircularProgress className="item-loader" />
                    }

                    <Button
                        color="primary"
                        onClick={() => goTo('/results')}
                    >
                        Atras
                    </Button>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Page;
