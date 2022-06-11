import { zodResolver } from '@hookform/resolvers/zod';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useForm, Controller } from 'react-hook-form';
import { Button, Text, TextInput, StyleSheet } from 'react-native';
import { addUserValidator } from '../validators/addUserValidator';
import type { AddUserValidator } from '../validators/addUserValidator';

export const AddUserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddUserValidator>({
    resolver: zodResolver(addUserValidator),
  });

  const onSubmit = (data: AddUserValidator) => {
    console.log(data);
  };

  return (
    <>
      <Text>Name</Text>
      <Controller
        name="name"
        rules={{
          required: true,
        }}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
      />
      {errors.name && <Text>{errors.name.message}</Text>}

      <Text>Birthday</Text>
      <Controller
        name="birthDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DateTimePicker
            onChange={(date) =>
              onChange(new Date(date.nativeEvent.timestamp ?? ''))
            }
            style={styles.inputDate}
            value={value ?? new Date()}
            mode="date"
            locale="ja"
          />
        )}
      />
      {errors.birthDate && <Text>{errors.birthDate.message}</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 16,
    borderWidth: 1,
    padding: 8,
    width: 160,
  },
  inputDate: {
    height: 40,
    margin: 16,
    width: 104,
  },
});
