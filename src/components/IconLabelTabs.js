import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import BarChartIcon from '@material-ui/icons/BarChart';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function IconLabelTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<DataUsageIcon/>} label="LIVE"/>
                <Tab icon={<BarChartIcon/>} label="HISTORY"/>
                <Tab icon={<PersonPinIcon/>} label="SOCIAL"/>
            </Tabs>

            {props.elementsToDisplay.map((element, i) => {
                return <TabPanel value={value} index={i}>
                    {element}
                </TabPanel>;
            })}
        </Paper>
    );
}
