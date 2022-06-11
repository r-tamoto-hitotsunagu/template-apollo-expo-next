import { zodResolver } from '@hookform/resolvers/zod';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useForm, Controller } from 'react-hook-form';
import { Button, Text, TextInput, StyleSheet, View } from 'react-native';
import { addUserValidator } from '../validators/addUserValidator';
import type { AddUserValidator } from '../validators/addUserValidator';
import { useCreateUserMutation } from '$gql';
import { formatDate } from '$util/date.util';

export const AddUserForm = () => {
  const [createUserMutation, { loading, error, data }] =
    useCreateUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddUserValidator>({
    resolver: zodResolver(addUserValidator),
  });

  const onSubmit = async (input: AddUserValidator) => {
    const { birthDate, name } = input;

    await createUserMutation({
      variables: {
        input: {
          name,
          birthDate: formatDate(birthDate) ?? null,
        },
      },
    });
  };

  return (
    <View>
      <Text style={styles.section}>Name</Text>
      <Controller
        name="name"
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
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}

      <Text style={styles.section}>Birthday</Text>
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
      {errors.birthDate && (
        <Text style={styles.errorText}>{errors.birthDate.message}</Text>
      )}

      {loading && <Text>Saving</Text>}
      {error && <Text style={styles.errorText}>{error.message}</Text>}

      {data && (
        <View>
          <Text>{data.createUser?.id}</Text>
          <Text>{data.createUser?.name}</Text>
          <Text>{data.createUser?.birthDate}</Text>
        </View>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
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
  section: {
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
  },
});
