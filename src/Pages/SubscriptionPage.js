import React, { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from '@mui/material';

const SubscriptionPage = () => {
  const subscriptionPlan = [
    {
      id: 1,
      subscriptionLength: 'Monthly',
      priceBreakdown: '',
      price: '$10.95',
      save: '',
    },
    {
      id: 2,
      subscriptionLength: '1 Year',
      priceBreakdown: '$5.96X12 months',
      price: '$71.52',
      save: 'Save $60',
    },
    {
      id: 3,
      subscriptionLength: '2 Year',
      priceBreakdown: '$3.58X24 months',
      price: '$61.52',
      save: 'Save $146',
    },
    {
      id: 4,
      subscriptionLength: '3 Year',
      priceBreakdown: '$2.75X36 months',
      price: '$99.00',
      save: 'Save $60',
    },
  ];

  const [formData, setFormData] = useState({
    subscriptionLength: '',
    priceBreakdown: '',
    price: '',
    save: '',
  });

  const [activeBtn, setActiveBtn] = useState({ background: '' });
  // const subscriptionLengthBtn = () => setActiveBtn({ background: 'red',  });

  console.log('formData', formData.price);

  const saveBtn = () => {
    console.log(formData);
  };

  return (
    <Box style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4">Web Hosting Subscription</Typography>
        <Typography variant="body1">
          How long do you need web hosting?
        </Typography>
      </Box>
      {subscriptionPlan.map((info, id) => (
        <>
          <Card
            key={info.id}
            sx={{
              display: 'flex',
              maxWidth: '480px',
              margin: '0 auto',
              boxShadow: 'none',
              p: 3,
            }}
            style={activeBtn}
            // onClick={subscriptionLengthBtn}
          >
            <Box>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={formData.subscriptionLength}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      subscriptionLength: e.target.value,
                      priceBreakdown: e.target.value,
                      price: e.target.value,
                      save: e.target.value,
                      // myPackage: [
                      //   { subscriptionLength: e.target.value },
                      //   { priceBreakdown: e.target.value },
                      //   { price: e.target.value },
                      //   { save: e.target.value },
                      // ],
                    });
                  }}
                >
                  <FormControlLabel
                    value={info.price}
                    control={<Radio />}
                    // label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" gutterBottom component="div">
                <b>{info.subscriptionLength}</b>
              </Typography>
              <Typography variant="caption" sx={{ color: 'lightgrey' }}>
                {info.priceBreakdown}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom component="div">
                <b>{info.price}</b>
              </Typography>
              <Typography variant="caption" sx={{ color: 'lightgrey' }}>
                {info.save}
              </Typography>
            </Box>
          </Card>
        </>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={saveBtn}>
          Save and Continue
        </Button>
      </Box>
    </Box>
  );
};

export default SubscriptionPage;
