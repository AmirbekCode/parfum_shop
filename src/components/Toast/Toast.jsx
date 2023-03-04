

function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Savatga Qo`shildi',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }