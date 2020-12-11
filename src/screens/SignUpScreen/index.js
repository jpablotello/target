import React, { memo, useCallback } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { object } from 'prop-types';

import SignUpForm from 'components/SignUpForm';
import { SIGN_UP_SCREEN } from 'constants/screens';
import { signUp } from 'actions/userActions';
import strings from 'locale';
import styles from './styles';
import Images from '../../assets/images';

const SignUpScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const signUpRequest = useCallback(user => dispatch(signUp(user)), [dispatch]);

  return (
    <View style={styles.container} testID={SIGN_UP_SCREEN}>
      <View style={styles.iconContainer}>
        <Image source={Images.Icon} style={styles.imgIconContainer} />
      </View>
      <Text style={styles.welcome}>{strings.SIGN_UP.title}</Text>
      <SignUpForm onSubmit={signUpRequest} />
      <Button title={strings.SIGN_IN.title} onPress={() => navigation.goBack()} />
    </View>
  );
});

SignUpScreen.propTypes = {
  navigation: object.isRequired,
};

SignUpScreen.navigationOptions = {
  title: strings.SIGN_UP.title,
};

export default SignUpScreen;
