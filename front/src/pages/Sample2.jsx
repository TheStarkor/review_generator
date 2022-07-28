import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Sample2 = (props) => {

	return (
		<>
			<h1>Labeling Criteria and Examples</h1>
      <h2>Here are labeling examples.</h2>
      <div className='example'>
			<ol>
        <li>
          Example 1 : Got the earphones 3 days back.
        </li>
          <FormControl>
				<FormLabel id="row-radio-buttons-group-label">Consideration</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel  disabled="true" value="0" control={<Radio />} label="O" />
					<FormControlLabel  checked="true" value="1" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Purchase</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Shipping</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel checked="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel disabled="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Using</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Customer Service</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">None</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
			</FormControl> 
        <li>
          Example 2 : After a research to headset in the price rage of Rs.2000, I finally landed with this one.
          </li>
          <FormControl>
				<FormLabel id="row-radio-buttons-group-label">Consideration</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel  checked="true" value="0" control={<Radio />} label="O" />
					<FormControlLabel  disabled="true" value="1" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Purchase</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel checked="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel disabled="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Shipping</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Using</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Customer Service</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">None</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
			</FormControl> 
          <li>
          Example 3 : Headset offerings great sound and warranty service.
          </li>
          <FormControl>
				<FormLabel id="row-radio-buttons-group-label">Consideration</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel  disabled="true" value="0" control={<Radio />} label="O" />
					<FormControlLabel  checked="true" value="1" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Purchase</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Shipping</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Using</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Customer Service</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel checked="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel disabled="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">None</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
			</FormControl> 
        <li>
          Example 4 : This is one of the top ones.
          </li>
          <FormControl>
				<FormLabel id="row-radio-buttons-group-label">Consideration</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel  disabled="true" value="0" control={<Radio />} label="O" />
					<FormControlLabel  checked="true" value="1" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Purchase</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Shipping</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Using</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Customer Service</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel disabled="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel checked="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">None</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<FormControlLabel checked="true" value="1" control={<Radio />} label="O" />
					<FormControlLabel disabled="true" value="0" control={<Radio />} label="X" />
				</RadioGroup>
			</FormControl> 
      </ol>
      </div>
			<Stack direction="row" spacing={2}>
        <Link to="/">
				  <Button variant="outlined">Previous</Button>
        </Link>
        <Link to="/problem">
				  <Button variant="outlined">Next</Button>
        </Link>
			</Stack>
		</>
	);
};

export default Sample2;
