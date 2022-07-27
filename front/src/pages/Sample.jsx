import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const Sample = (props) => {
  const criteriaMd = `
1. Consideration : Opinions related to before purchase decision making
  - expectation of the product
      - Quotes : Disappointed as I expected that it would last me for 6 months for the least.
  - Reason for purchase decision making
      - Quotes : I buy this product for my daughter’s present.
  - product search experience
      - Quotes : After a long research, I finally choose this one.
  - previous similar product usage experience
      - Quotes : I've tried similar products from the same company before.
2. Purchase : Opinions related to purchases on the platform
  - Thoughts and opinions about price
      - Quotes : I spend at least 1600 rs for this product and really unsatisfied.
  - Experience related to payment methods
      - Quotes : I kept trying, but Amazon's payment system didn't work.
3. Shipping : Opinions related to product shipping
  - Thoughts and opinions about delivery time
      - Quotes : Got the earphones 3 days early.
  - Package condition
      - Quotes : The product came very worse packaged.
4. Using : Opinions related to product usage
  - Product quality evaluation (sound quality, bass, charging, connection, ….)
      - Quotes : the sound quality is awesome but the built quality of the product is at very low level.
  - Context of use.
      - Quotes : I used it when exercising.
  - Ease of use
      - Quotes : The earphones kept coming out of my ears.
  - Frequency of use
      - Quotes : I use the product 2-3 times a week.
5. Customer Service : Opinions about product issues and the company’s response
  - Warranty service
      - Quotes : The product is giving a two-year warranty.
  - Return
      - Quotes : product is returned
  - Refund / Replace
      - Quotes : Hope to get it replaced at service centre.
  - Company’s communication about the product issue
      - Quotes : I've tried calling them but the always receive a 'network busy' error.
  `;

	return (
		<>
			<h2>Labeling Criteria and Examples</h2>
      <h3>Labeling criteria according to customer journey stage is: </h3>
			
      <ReactMarkdown children={criteriaMd} remarkPlugins={[remarkGfm]} />
			<Stack direction="row" spacing={2}>
        <Link to="/">
				  <Button variant="outlined">Previous</Button>
        </Link>
        <Link to="/sample2">
				  <Button variant="outlined">Next</Button>
        </Link>
			</Stack>
		</>
	);
};

export default Sample;
