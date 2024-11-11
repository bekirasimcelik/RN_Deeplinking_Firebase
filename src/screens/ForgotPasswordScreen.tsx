import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const ForgotPasswordScreen: React.FC = () => {
  const handleResetPassword = () => {
    // Şifre sıfırlama işlemini burada gerçekleştir
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
      <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 16}}>
        Reset Password
      </Text>
      <TextInput
        placeholder="Enter your email"
        style={{borderWidth: 1, marginBottom: 16, padding: 8}}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;
