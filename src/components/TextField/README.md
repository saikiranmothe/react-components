Basic text field (default):

    <TextField />

Email field with label and onChange handler:

    <TextField
      id='email'
      className='email-container'
      name='email'
      type='email'
      placeholder='jack.bauer@badass.com'
      label='Your Email Address'
      required
      onChange={ (event) => console.log(event.target.value) }
    />

