import axios, { AxiosRequestConfig } from 'axios'
import { useState } from 'react'

const axiosInstance = axios.create({
  // usando a biblioteca axios que auxilia nas requisições Rest sendo o create o uso da url base e sendo padrão para as rotas que serão passadas por parametros dependo de qual tipo de request,no caso é uma request POST
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
}) //Aqui vc está pegando a variavel ambiente no qual é a url base para passar os valores de acesso

export const usePost = <T, P>(endpoint: string) => {
  //Os types T e P são valores a receber no qual irei passar interfaces de valor para eles sendo que irei passar para o mesmo Interfaces que definim que irão receber o T a resposta do Post e o P o envio logo um depende do outro
  const [data, setData] = useState<T | null>(null) //Recebe o valor da Resposta do Post
  const [loading, setLoading] = useState<boolean>(false) //Sinaliza o começo e o fim do evento de Post da Requisção Rest
  const [error, setError] = useState<number | null>(null) //Para armazenar o valor caso haja a resposta do error pq a request é uma função asyncrona

  const postData = async (postData: P, config?: AxiosRequestConfig) => {
    //função do evento de Post o postData recebe os valores em formato JSON como parametro no caso por exemplo um Login ae teria um email e senha e resposta para o T jwt-token
    setData(null)
    setLoading(true)
    setError(null)

    try {
      const response = await axiosInstance({
        //Sintaxe de envio Post usando axios
        url: endpoint, //endpoint,parametro de qual rota para a base url no caso um login
        method: 'POST', // Tipo da Request
        data: postData, // dados que serão enviados em formatos JSON
        headers: {
          'Content-Type': 'application/json', //Headers defini o tipo e o formato de como o dado será passado são as configs do envio,instruções
          ...config?.headers, //São os Headers extras se quiser ser passados,sitaxe do axios para o mesmo
        },
        ...config, //sintaxe para mais parametros caso seja necessario passar mais
      })
      setData(response.data)
      console.log('response:', response.data) //Passando a resposta do envio já que é uma função assyncrona
    } catch (error: any) {
      //Any um objeto que recebe todo tipo de dado, não muito recomendado usar
      setError(error.response?.status || 500) //Tratamento do error
    } finally {
      setLoading(false) //Sinalizando o termino do envio da request POST
    }
  }
  return { data, loading, error, postData } // No final de tudo a função resposta os dados obtidos e tratados para o uso do mesmo
}
