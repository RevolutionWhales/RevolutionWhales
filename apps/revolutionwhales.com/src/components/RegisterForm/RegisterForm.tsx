import { supabase } from '@/supabase';
import { DefaultProps, Selectors, Box } from '@mantine/core';
import { useForm } from "react-hook-form";
import useStyles, { RegisterFormStylesParams } from './RegisterForm.styles';

type RegisterFormStylesNames = Selectors<typeof useStyles>

interface RegisterFormProps extends DefaultProps<RegisterFormStylesNames, RegisterFormStylesParams> {
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  classNames,
  styles,
  unstyled,
  className,
  ...others
}) => {
  const { classes, cx } = useStyles(
    undefined,
    { name: 'RegisterForm', classNames, styles, unstyled }
  );

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const createAccount = async () => {
    console.log('create!');

    const { data, error } = await supabase.auth.signUp({
      email: 'lunacrafts@protonmail.com',
      password: 'lunacrafts',
    })

    console.log(data);
    console.log(error);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Email' type={'email'} {...register("email")} /><br />

      <input placeholder='Password' {...register("password", { required: true })} /> <br />
      <input placeholder='Repeat password' {...register("repeatPassword", { required: true })} /> <br />
      <div style={{ color: 'white' }} onClick={() => {
        createAccount();
      }}>Submit</div>
    </form>
  );
}
