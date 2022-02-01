import { IonItem, IonInput, IonLabel, IonTextarea, } from "@ionic/react";
import { text } from "ionicons/icons";
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

export const ProfileForm: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = (data: any) => {
        console.log('test: ', data);
    }
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
        <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput placeholder="First Last" autocomplete="name" required={true}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Address:</IonLabel>
          <IonInput placeholder="Address Line 1" autocomplete="address-line1" required={true}></IonInput>
          <IonInput placeholder="Address Line 2" autocomplete="address-line2"></IonInput>
          <IonInput placeholder="City" autocomplete="address-level2" required={true}></IonInput>
          <IonInput placeholder="State" autocomplete="address-level1" required={true}></IonInput>
          <IonInput placeholder="Zip Code" autocomplete="postal-code" required={true}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Phone Number</IonLabel>
          <IonInput inputmode="tel" placeholder="999-999-9999" autocomplete="tel" required={true}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Bio:</IonLabel>
          <IonTextarea placeholder="Previous sports, hobbies experience" autoGrow={true} required={true}></IonTextarea> 
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Inreach/Spot Tracking URL:</IonLabel>
          <IonInput placeholder="Optional"></IonInput> 
        </IonItem>
    <input type="submit" />
  </form>
    );
}

