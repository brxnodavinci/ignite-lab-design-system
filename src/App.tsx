import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";

import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen flex items-center flex-col bg-gray-900 justify-center text-gray-100">
      <header className="flex flex-col items-center">
      <Logo />

      <Heading size="lg" className="mt-4">
        Ignite Lab
      </Heading>

      <Text size="lg" className="text-gray-100 mt-1">
        Conecte-se e vamos codar!
      </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder="***********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
            <Text size="sm" className="text-gray-200">Lembrar dos meus dados</Text>
        </label>
        
        <Button type="submit" className="mt-4">ENTRAR</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
        <a href="" className="text-gray-400 hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
        <span className="text-gray-400">Não possui conta? <a href="" className="text-fuchsia-700 hover:text-fuchsia-600">Crie uma agora!</a></span>
        </Text>
      </footer>
    </div>
  )
}