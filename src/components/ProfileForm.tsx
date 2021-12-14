import { IonItemDivider, IonItem, IonInput, IonContent, IonList, IonLabel } from "@ionic/react";
import { text } from "ionicons/icons";
import React from "react";
import { useForm } from "react-hook-form";

export const ProfileForm: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log('test: ', data);
    }
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      
    <IonContent>
        <IonList>
          <IonItemDivider>Default Input with Placeholder</IonItemDivider>
          <IonLabel>TEST</IonLabel>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" ></IonInput>
          </IonItem>
        </IonList>
    </IonContent>
   
    
    <input type="submit" />
  </form>
    );
}

