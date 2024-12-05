import { Grid2 } from "@mui/material"
import '../App.css'

export const CalendarGrid = () => {
    return (
        <Grid2 container spacing={0.5} columns={7}>
            <Grid2 size = {1} sx = {{backgroundColor: 'yellow'}}>
                <p>M</p>
            </Grid2>
            <Grid2 size = {1} sx = {{backgroundColor: 'yellow'}}>
                <p>Tu</p>
            </Grid2>
            <Grid2 size = {1} sx = {{backgroundColor: 'yellow'}}>
                <p>W</p>
            </Grid2>
            <Grid2 size = {1} sx = {{backgroundColor: 'yellow'}}>
                <p>Th</p>
            </Grid2>
            <Grid2 size = {1} sx = {{backgroundColor: 'yellow'}}>
                <p>F</p>
            </Grid2>
            <Grid2 size = {1} sx = {{backgroundColor: 'yellow'}}>
                <p>Sa</p>
            </Grid2>
            <Grid2 size = {1} sx = {{backgroundColor: 'yellow'}}>
                <p>Su</p>
            </Grid2>
            <Grid2 size = {1} sx = {{backgroundColor: 'yellow'}}>
                <p>8</p>
            </Grid2>
        </Grid2>
    );
}