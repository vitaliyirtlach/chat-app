export const readURL = (input: HTMLInputElement): Promise<string | null> => {
    return new Promise((resolve, e) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              resolve(e.target.result);
            } 
            reader.readAsDataURL(input.files[0]); // convert to base64 string
          }
    })    
}